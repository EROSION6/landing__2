import './Main.scss';
import { Advantages } from '../Advantages/Advantages';
import { Service } from '../Service/Service';
import { ListExamination } from '../ListExamination/ListExamination';
import { DeliveryPrice } from '../DeliveryPrice/DeliveryPrice';
import { Form } from '../Form/Form';
import { Register } from '../Register/Register';
import { BlockCar } from '../BlockCar/BlockCar';

export const Main = () => {
	return (
		<main className="main">
			<BlockCar />
			<Advantages />
			<Service />
			<ListExamination />
			<DeliveryPrice />
			<Form />
			<Register />
		</main>
	);
};
