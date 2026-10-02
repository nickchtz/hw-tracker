export const dialog = {
    dialogOverlay: document.querySelector('.dialog-overlay'),
    dialogElement: document.querySelector('.dialog'),

    create(title, body){
        dialog.dialogElement.querySelector('#dialog-title').innerText = title;
        dialog.dialogElement.querySelector('.dialog-body').innerHTML = body;

        const dialogDismiss = dialog.dialogElement.querySelector('#dialog-dismiss');

        dialogDismiss.addEventListener('click', dialog.dismiss);
        window.addEventListener('keydown', event => event.key === 'Escape' && dialog.dismiss());
        
        this.show();
    },

    show(){
        dialog.dialogElement.classList.remove('dialog-closed');
        dialog.dialogOverlay.classList.remove('hidden');
    },
    
    dismiss(){
        dialog.dialogElement.classList.add('dialog-closed');
        dialog.dialogOverlay.classList.add('hidden');
    }
};