import Plus from '../../assets/svg/plus/plus';

function AddButton({ setIsEditMode }) {
  const clickButtonHandler = (evt) => {
    evt.preventDefault();
    setIsEditMode(isEditMode => !isEditMode);
  };

  return (
    <button
      type="button"
      className="add-btn"
      onClick={clickButtonHandler}
    >
      <Plus />
    </button>
  );
}

export default AddButton;