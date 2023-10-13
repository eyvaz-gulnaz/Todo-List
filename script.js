        var arr = JSON.parse(localStorage.getItem('text')) || [];

        function refreshTodoList() {
            $('.todolist').empty(); 
            arr.forEach(function(task, i) {
                var p = $(`<p class="bu tapsiriq-${i}">${task}</p>`);
                var editBtn = $(`<button class="editBtn" data-counter=${i}><i class="fa-solid fa-pen"></i></button>`); 
                var deleteTask = $(`<button class="delBtn" data-counter=${i}>x</button>`);
                p.append(editBtn);
                p.append(deleteTask);
                $('.todolist').prepend(p);

                if (arr.length > 1) {
                $('.clear-all').css({ display: 'block' });
            } else {
                $('.clear-all').css({ display: 'none' });
            }

                deleteTask.on('click', function () {
                    arr.splice(i, 1);
                    localStorage.setItem('text', JSON.stringify(arr)); 
                    refreshTodoList();
                });

                        editBtn.on('click', function () {
                var inputField = $('<input type="text" class="edit-input">');
                inputField.val(task);
                p.html(inputField);
        
                var saveBtn = $(`<button class="save-edit ${i}"><i class="fa-solid fa-check"></i></button>`);
                p.append(saveBtn);
            
                saveBtn.on('click', function () {
                arr[i] = inputField.val();
                localStorage.setItem('text', JSON.stringify(arr)); 
                refreshTodoList();
                });
                editBtn.hide();
        
});
            });
        }
        refreshTodoList();

        $('.save').on('click', function () {
            var task = $('input').val().trim();
            if (task !== '') {
                arr.push(task); 
                localStorage.setItem('text', JSON.stringify(arr));
                $('input').val('');
                refreshTodoList(); 
            } 
        });

        $('.clear-all').on('click', function ClearTasks() {
            localStorage.clear();
            arr = [];
            this.style.display = "none"
            refreshTodoList();
        });

        


