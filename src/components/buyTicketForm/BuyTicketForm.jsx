import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { bookTicket } from "../../redux";
import { useParams } from "react-router-dom";

export default function BuyTicketForm() {
	const { id } = useParams();
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) =>
		dispatch(
			bookTicket({
				eventId: id,
				firstname: data.firstname,
				lastname: data.lastname,
				email: data.email,
				phone: data.phone,
				birthdate: data.birthdate,
				gender: data.gender,
			})
		);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="Firstname"
				{...register("firstname", { required: true })}
			/>
			{errors.firstname && <span> !! This field is required !! </span>}
			<input
				type="text"
				placeholder="Lastname"
				{...register("lastname", { required: true })}
			/>
			{errors.lastname && <span> !! This field is required !! </span>}
			<input
				type="email"
				placeholder="Email"
				{...register("email", { required: true })}
			/>
			{errors.email && <span> !! This field is required !! </span>}
			<input
				type="phone"
				placeholder="Phone number"
				{...register("phone", { required: true })}
			/>
			{errors.phone && <span> !! This field is required !! </span>}
			<input type="date" {...register("birthdate", { required: true })} />
			{errors.date && <span> !! This field is required !! </span>}
			<select {...register("gender", { required: true })}>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
			<input type="submit" value="Buy" />
		</form>
	);
}
