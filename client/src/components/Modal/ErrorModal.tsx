import Portal from '../Portal';

interface ErrorModalI {
  hasError: boolean;
}

const ErrorModal = ({ hasError = false }: ErrorModalI) => {
  const refreshPage = () => {};

  return (
    <Portal elementId="error-modal">
      <div className={`modal-overlay ${hasError && 'show'}`}>
        <div className="modal-wrapper">
          <h3 className="modal-title">경고</h3>
          <div className="modal-description">
            알 수 없는 에러가 발생했습니다. <br />
            다시 시도해주세요.
          </div>
          <div className="modal-buttons">
            <button onClick={refreshPage}>확인</button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default ErrorModal;
