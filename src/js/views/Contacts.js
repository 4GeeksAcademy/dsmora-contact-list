import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Contacts = () => {

	const context = useContext(Context);

	// const store = context.store;

	// const actions = context.actions;

	const { store, actions } = useContext(Context);

	const { deleteContact } = actions;

	return (
		<div className="text-center mt-5">
			<h1>
				Contacts
			</h1>
			<div>
				<button onClick={() => { console.log('add') }}>
					Add Contact
				</button>
			</div>
			<div>
				Lista de contactos:
				<ul>
					{console.log(store.contacts)}
					{
						store.contacts.map((element) => {
							return (
								<li key={element.id}>
									{element.full_name} {element.phone}
									<button onClick={() => deleteContact(element.id)}>
										eliminar
									</button>
								</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	)
};

