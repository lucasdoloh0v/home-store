import Image from 'next/image';
import { Content, PropertieContainer } from './styles';
import { useState } from 'react';
import Modal from '../Modal';
import ContactForm from '../ContactForm';

function Propertie({propertie}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal>
        <Modal.Trigger asChild>
          <PropertieContainer>
            <Image
              src={propertie.img_url}
              alt='Imagem do edificio'
              width={80}
              height={80}
            />

            <Content>
              <h3>{propertie.title}</h3>

              <span>{propertie.description}</span>
              <p>Caracteristicas:</p>
              <ul>
                {propertie.characteristics.map(characteristic => (
                  <li key={characteristic}>{characteristic}</li>
                ))}
              </ul>

              <h4>Valor: {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(propertie.price)}</h4>
            </Content>
          </PropertieContainer>
        </Modal.Trigger>

        <Modal.Content title="Entre em contato conosco">
          <ContactForm />
        </Modal.Content>
      </Modal>
    </>
  );
}

export default Propertie;
