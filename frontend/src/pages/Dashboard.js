// function Dashboard() {

//     return (

//         <div>

//             <h2>Dashboard</h2>

//         </div>

//     );

// }

// export default Dashboard;

// import EmployeeForm from "../components/EmployeeForm";

// function Dashboard() {

//     return (

//         <div>

//             <h2>Dashboard</h2>

//             <EmployeeForm />

//         </div>

//     );

// }

// export default Dashboard;

// import EmployeeForm from "../components/EmployeeForm";

// import EmployeeList from "../components/EmployeeList";

// function Dashboard() {

//     return (

//         <div>

//             <h2>Dashboard</h2>

//             <EmployeeForm />

//             <EmployeeList />

//         </div>

//     );

// }

// export default Dashboard;

import EmployeeForm from "../components/EmployeeForm";

import EmployeeList from "../components/EmployeeList";

import SearchFilter from "../components/SearchFilter";

function Dashboard() {

    return (

        <div>

            <h2>Dashboard</h2>

            <EmployeeForm />

            <SearchFilter />

            <EmployeeList />

        </div>

    );

}

export default Dashboard;