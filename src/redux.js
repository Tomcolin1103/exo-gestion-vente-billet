import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuid } from "uuid";

const response = await axios.get("http://localhost:3000/events");
const data = response.data;

const eventsSlice = createSlice({
	name: "events",
	initialState: data,
	reducers: {
		addEvent: (state, action) => {
			const newEvent = {
				id: uuid(),
				name: action.payload.name,
				date: action.payload.date,
				location: action.payload.location,
				description: action.payload.description,
			};
			state.push(newEvent);
			axios.post("http://localhost:3000/events", newEvent);
		},
		deleteEvent: (state, action) => {
			state = state.filter((event) => event.id !== action.payload);
			axios.delete(`http://localhost:3000/events/${action.payload}`);
			return state;
		},
		getDetail: (state, action) => {
			state = state.filter((event) => event.id === action.payload);
			return state;
		},
		bookTicket: (state, action) => {
			const newTicket = {
				id: uuid(),
				firstname: action.payload.firstname,
				lastname: action.payload.lastname,
				email: action.payload.email,
				phone: action.payload.phone,
				date: action.payload.date,
				gender: action.payload.gender,
				event: action.payload.eventId,
			};
			state.push(newTicket);
			axios.post(`http://localhost:3000/tickets/`, newTicket);
		},
	},
});

export const { addEvent, deleteEvent, getDetail, bookTicket } =
	eventsSlice.actions;

export const store = configureStore({
	reducer: {
		events: eventsSlice.reducer,
	},
});
