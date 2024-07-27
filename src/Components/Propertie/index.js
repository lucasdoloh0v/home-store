import Image from 'next/image';
import { Content, PropertieContainer } from './styles';

function Propertie() {
  return (
    <PropertieContainer>
      <Image
        src='https://images.unsplash.com/photo-1492659991124-ba70990ba2f4?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Imagem do edificio'
        width={80}
        height={80}
      />

      <Content>
        <h3>Apartamento em Santos</h3>

        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sit amet sapien quis ligula consequat tempor sed ut lorem. Proin
          vehicula magna id blandit sollicitudin. Nullam vitae convallis nulla.
          Sed malesuada egestas tellus vel ullamcorper. Donec finibus lacus id
          mauris feugiat, sit amet auctor leo tristique. Morbi est massa,
          iaculis sed ipsum luctus, ultrices porttitor urna. Nullam nec auctor
          dui. In elementum luctus ex, in vulputate leo porttitor a.
        </span>
        <p>Caracteristicas:</p>
        <ul>
          <li>2 dormitórios</li>
          <li>lavabo</li>
          <li>1 vaga de garagem</li>
        </ul>

        <h4>Valor: R$ 400.000,00</h4>
      </Content>
    </PropertieContainer>
  );
}

export default Propertie;
