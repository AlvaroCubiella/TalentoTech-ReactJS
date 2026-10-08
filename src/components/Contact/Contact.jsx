import { useState } from "react"
import "./Contact.css"

export const Contact = () => {
  // Este useState lo uso provisoriamente para mostar un showmodal
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Me cierra el showModal
  const closeModal = () => {
    setShowModal(false)
    // Limpiamos el formulario al cerrar el popup
    setFormData({ name: "", email: "", message: "" })
  };

  const handleSubmit = (e) => {
    // Evita que se borren al refrescar el html las cosas de los campos cargados
    e.preventDefault();    
    setShowModal(true);
    console.log("Datos del formulario enviados:", formData);
    // Aquí irá la lógica para enviar el mensaje. Por le momento muestro un modal
    
  };

  return (
    <section className="contact-container">
      <h1>Contacto</h1>
      <p>¿Tenés alguna duda o consulta? Escribinos y te responderemos a la brevedad.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Enviar Mensaje</button>
      </form>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>¡Mensaje enviado con éxito!</h3>
            <p>Gracias <strong>{formData.name}</strong>, en breve nos contactaremos contigo.</p>
            <button onClick={closeModal} className="modal-close-btn">Aceptar</button>
          </div>
        </div>
      )}
    </section>
  );
};