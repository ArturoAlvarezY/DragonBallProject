
<script setup>
   //import { modalClearEditForm } from "./signin-form.js";

   export function showEditModal() {

    const openModalButton = document.getElementById('sign-in-button');
    const EditModal = document.getElementById('login-modal');

    modalClearEditForm();

    openModalButton.addEventListener('click', function() {
        if (!EditModal.classList.contains('modal--open')) {
         EditModal.classList.add('modal--open');
 
 };

 });

};
export function closeEditModal() {
    const closeModalButton = document.getElementById('close-modal');
    const EditModal = document.getElementById('edit-modal');

    modalClearEditForm();
}
</script>