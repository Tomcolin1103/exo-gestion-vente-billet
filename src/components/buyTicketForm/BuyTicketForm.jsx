import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { bookTicket } from "../../redux";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function BuyTicketForm() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const buyTicketValidator = yup.object({
		firstname: yup.string().min(3).max(100).required("This field is mandatory"),
		lastname: yup.string().min(3).max(100).required("This field is mandatory"),
		email: yup.string().min(3).max(100).required("This field is mandatory"),
		phone: yup
			.string()
			.min(3)
			.max(100)
			.required("This field is mandatory")
			.matches(
				/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
				"Invalid phone number format"
			),
		birthdate: yup.string().min(3).max(100).required("This field is mandatory"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(buyTicketValidator) });

	const routeChange = () => {
		navigate("/events");
	};

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
	routeChange();

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col w-1/2 m-auto animate-fade-down"
		>
			<input
				type="text"
				placeholder="Firstname"
				{...register("firstname", { required: true })}
				className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300 m-3"
			/>
			{errors.firstname && (
				<span className="text-red-500"> !! This field is required !! </span>
			)}
			<input
				type="text"
				placeholder="Lastname"
				{...register("lastname", { required: true })}
				className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300 m-3"
			/>
			{errors.lastname && (
				<span className="text-red-500"> !! This field is required !! </span>
			)}
			<input
				type="email"
				placeholder="Email"
				{...register("email", { required: true })}
				className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300 m-3"
			/>
			{errors.email && (
				<span className="text-red-500"> !! This field is required !! </span>
			)}
			<input
				type="phone"
				placeholder="Phone number"
				{...register("phone", { required: true })}
				className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300 m-3"
			/>
			{errors.phone && (
				<span className="text-red-500"> !! This field is required !! </span>
			)}
			<input
				type="date"
				{...register("birthdate", { required: true })}
				className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300 m-3"
			/>
			{errors.birthdate && (
				<span className="text-red-500"> !! This field is required !! </span>
			)}
			<select
				{...register("gender", { required: true })}
				className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300 m-3"
			>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
			<input
				type="submit"
				value="Buy"
				className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-20 m-auto"
			/>
		</form>
	);
}
