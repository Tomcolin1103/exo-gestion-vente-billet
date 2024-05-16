import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addEvent } from "../../redux";
import { useNavigate } from "react-router-dom";

export default function NewEventForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const routeChange = () => {
		navigate("/events");
	};
	const onSubmit = (data) => {
		dispatch(addEvent(data));
		routeChange();
	};
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
			<input
				placeholder="name"
				{...register("name", { required: true })}
				className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300 w-1/3 self-center m-3"
			/>
			{errors.name && <span> !! This field is required !! </span>}
			<input
				placeholder="location"
				{...register("location", { required: true })}
				className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300 w-1/3 self-center m-3"
			/>
			{errors.location && <span> !! This field is required !! </span>}
			<input
				type="date"
				{...register("date", { required: true })}
				className="bg-zinc-100 rounded-md shadow-lg p-4 border border-zinc-300 w-1/3 self-center m-3"
			/>
			{errors.date && <span> !! This field is required !! </span>}
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
				className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-1/6"
			/>
		</form>
	);
}
