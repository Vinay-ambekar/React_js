
import './App.css';
import Header from './header/Header';
import Routers from './routers/Routers';

function App() {
  let androindPhones=[
    'Zenith X1',
    'NovaTech Neo',
    'Quantum Q10',
    'Lumina Vibe',
    'Horizon 7X',
    'Nexus Edge',
    'Eclipse S1',
    'Velocity Pro',
    'Aurora XE',
    'Titan Evoke']
  let ArrObjes=[
    {
      "id": 1,
      "name": "John Doe",
      "age": 30,
      "email": "john.doe@example.com",
      "address": "123 Main Street, Cityville",
      "phone": "+1234567890"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 25,
      "email": "jane.smith@example.com",
      "address": "456 Elm Street, Townsville",
      "phone": "+1987654321"
    },
    {
      "id": 3,
      "name": "Michael Johnson",
      "age": 40,
      "email": "michael.johnson@example.com",
      "address": "789 Oak Street, Villagetown",
      "phone": "+1357924680"
    },
    {
      "id": 4,
      "name": "Emily Brown",
      "age": 35,
      "email": "emily.brown@example.com",
      "address": "321 Pine Street, Hamletville",
      "phone": "+8765432109"
    },
    {
      "id": 5,
      "name": "David Wilson",
      "age": 28,
      "email": "david.wilson@example.com",
      "address": "567 Maple Street, Suburbia",
      "phone": "+2468013579"
    },
    {
      "id": 6,
      "name": "Emma Martinez",
      "age": 32,
      "email": "emma.martinez@example.com",
      "address": "901 Cedar Street, Countryside",
      "phone": "+1122334455"
    },
    {
      "id": 7,
      "name": "Daniel Lee",
      "age": 27,
      "email": "daniel.lee@example.com",
      "address": "345 Birch Street, Ruralville",
      "phone": "+9988776655"
    },
    {
      "id": 8,
      "name": "Olivia Taylor",
      "age": 29,
      "email": "olivia.taylor@example.com",
      "address": "678 Ash Street, Outskirts",
      "phone": "+5544332211"
    },
    {
      "id": 9,
      "name": "James Garcia",
      "age": 38,
      "email": "james.garcia@example.com",
      "address": "210 Cedar Street, Farmland",
      "phone": "+8877665544"
    },
    {
      "id": 10,
      "name": "Sophia Rodriguez",
      "age": 31,
      "email": "sophia.rodriguez@example.com",
      "address": "543 Elm Street, Countryside",
      "phone": "+3366993366"
    },
    {
      "id": 11,
      "name": "William Lopez",
      "age": 33,
      "email": "william.lopez@example.com",
      "address": "987 Oak Street, Mountainview",
      "phone": "+5566778899"
    },
    {
      "id": 12,
      "name": "Isabella Hernandez",
      "age": 26,
      "email": "isabella.hernandez@example.com",
      "address": "876 Pine Street, Valleytown",
      "phone": "+1144778899"
    },
    {
      "id": 13,
      "name": "Benjamin Gonzalez",
      "age": 34,
      "email": "benjamin.gonzalez@example.com",
      "address": "321 Maple Street, Hillside",
      "phone": "+6677889900"
    },
    {
      "id": 14,
      "name": "Mia Perez",
      "age": 37,
      "email": "mia.perez@example.com",
      "address": "654 Birch Street, Lakeside",
      "phone": "+7788990011"
    },
    {
      "id": 15,
      "name": "Ethan Torres",
      "age": 24,
      "email": "ethan.torres@example.com",
      "address": "210 Cedar Street, Riverside",
      "phone": "+9900112233"
    },
    {
      "id": 16,
      "name": "Amelia Ramirez",
      "age": 36,
      "email": "amelia.ramirez@example.com",
      "address": "543 Elm Street, Farmland",
      "phone": "+1122334455"
    },
    {
      "id": 17,
      "name": "Alexander Cruz",
      "age": 39,
      "email": "alexander.cruz@example.com",
      "address": "876 Oak Street, Mountainside",
      "phone": "+3344556677"
    },
    {
      "id": 18,
      "name": "Charlotte Flores",
      "age": 23,
      "email": "charlotte.flores@example.com",
      "address": "321 Pine Street, Lakeside",
      "phone": "+5566778899"
    },
    {
      "id": 19,
      "name": "Daniel Silva",
      "age": 28,
      "email": "daniel.silva@example.com",
      "address": "654 Maple Street, Riverside",
      "phone": "+1122334455"
    },
    {
      "id": 20,
      "name": "Ava Gonzalez",
      "age": 31,
      "email": "ava.gonzalez@example.com",
      "address": "987 Cedar Street, Countryside",
      "phone": "+7788990011"
    }
  ] 
  //console.log(ArrObjes)

  return (
    <div>
    <Header/>
    <Routers AndroindPhones={androindPhones} Arrobjects={ArrObjes}/>
    
   
    </div>
  );
}

export default App;
