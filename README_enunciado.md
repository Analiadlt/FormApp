# Challenge Form-Builder.
​
- Realizar una app en React.js iniciando dicha app con Vite.

- Que lea el archivo JSON compartido al final de este README y genere con cada ítem una interfaz de app de encuesta (como Google Forms).
​
- En cuanto a diseño y estética tiene que diferir de Google Forms. Podés utilizar cualquier librería que creas necesaria.

- Las respuestas de la encuesta deben ser enviadas a una base de datos de Firebase.
​
- Dicha base de datos tiene que ser de su propiedad. No nos compartas acceso a la base de datos.
​
- Por último, traé las respuestas de la base de datos ya mencionada y mostralas en la misma app pero en otra ruta. Al presionar “enviar” en el formulario tiene que aparecer un mensaje y el acceso a esa ruta en donde estarán las respuestas. El diseño y estética queda a libre elección.
​
- Una vez realizado, compartinos tu challenge mediante gitHub 

- Realiza un README explicativo
​
```
Nota: El deploy puede ser donde quieras (vercel, github pages, etc.). No vamos a solicitarte el acceso a tu base de datos. Cualquier hipótesis o consideración debe estar aclarada en el Readme
```

### archivo JSON

```json
{
	"items": [
		{
			"type": "text",
			"label": "Nombre completo",
			"name": "full_name",
			"required": true
		},
		{
			"type": "email",
			"label": "Correo electrónico",
			"name": "email",
			"required": true
		},
		{
			"type": "date",
			"label": "Fecha de nacimiento",
			"name": "birth_date",
			"required": true
		},
		{
			"type": "select",
			"label": "¿Cuál es tu país de origen?",
			"name": "country_of_origin",
			"options": [
				{
					"label": "Argentina",
					"value": "argentina"
				},
				{
					"label": "Brasil",
					"value": "brasil"
				},
				{
					"label": "Chile",
					"value": "chile"
				},
				{
					"label": "Colombia",
					"value": "colombia"
				},
				{
					"label": "México",
					"value": "mexico"
				},
				{
					"label": "Perú",
					"value": "peru"
				},
				{
					"label": "Uruguay",
					"value": "uruguay"
				},
				{
					"label": "Venezuela",
					"value": "venezuela"
				}
			],
			"required": true
		},
		{
			"type": "checkbox",
			"label": "¿Acepta los términos y condiciones?",
			"name": "terms_and_conditions",
			"required": true
		},
		{
			"type": "submit",
			"label": "Enviar"
		}
	]
}
```