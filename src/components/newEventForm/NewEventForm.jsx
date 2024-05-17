import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addEvent } from "../../redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function NewEventForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const newEventValidator = yup.object({
		name: yup.string().min(3).max(100).required("This field is mandatory"),
		location: yup.string().min(3).max(300).required("This field is mandatory"),
		date: yup.string().min(3).max(12).required("This field is mandatory"),
		description: yup
			.string()
			.min(3)
			.max(500)
			.required("This field is mandatory"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(newEventValidator) });

	const routeChange = () => {
		navigate("/events");
	};
	const onSubmit = (data) => {
		dispatch(addEvent(data));
		routeChange();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col w-1/2 m-auto animate-fade-down"
		>
			<input
				placeholder="name"
				{...register("name", { required: true })}
				className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300 w-1/3 self-center m-3"
			/>
			{errors.name && (
				<span className="text-red-500 m-auto">
					{" "}
					!! This field is required !!{" "}
				</span>
			)}
			<input
				placeholder="location"
				{...register("location", { required: true })}
				className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300 w-1/3 self-center m-3"
			/>
			{errors.location && (
				<span className="text-red-500 m-auto">
					{" "}
					!! This field is required !!{" "}
				</span>
			)}
			<input
				type="date"
				{...register("date", { required: true })}
				className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300 w-1/3 self-center m-3"
			/>
			{errors.date && (
				<span className="text-red-500 m-auto">
					{" "}
					!! This field is required !!{" "}
				</span>
			)}
			<p className="flex self-center">
				<textarea
					rows={10}
					cols={100}
					{...register("description")}
					placeholder="description"
					className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300"
				/>
			</p>
			<input
				type="submit"
				value="add new event"
				className="m-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-1/3"
			/>
		</form>
	);
}
