import CerrarBtn from "../img/cerrar.svg";
const Modal = ({ setModal, animarModal, setanimarModal }) => {
  const ocultarModal = () => {
    setanimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 400);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            placeholder="añade el nombre del gasto"
            id="nombre"
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            placeholder="añade la cantidad del gasto"
            id="cantidad"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select name="" id="categoria">
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="gastos">Gastos Varios</option>
            <option value="diversion">Tiempo Libre</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
