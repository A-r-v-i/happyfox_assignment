# HappyFox Assignment

## `Tech stack used`
### Frontend
> React JS
> Styled-Components
> Chart framework - `@dabeng/react-orgchart` a chart library built upon OrgChart package to display the organization chart

### Backend
For now I've used some static JSON data to display chart and its contents

As per the requirement,

1. I've implemented one sidebar component where user can see the list of managers and a search input with auto complete feature for manager name
2. There is a dashboard or main component where you can see the organizational chart


For this implementation I've used some static data directly in the application, since creating new Api endpoints will take more time so I've used this approach.
Data has been passed as a prop to lower components.
Also I didn't used any CSS library here, I've done the styling with styled-components itself.
