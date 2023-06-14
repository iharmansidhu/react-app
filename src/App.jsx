import "./App.css";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import Table from "./components/Table";

const data = [
  {
    id: "71afa89a-d010-4a62-ab6f-10685b39ba9b",
    tenantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "wyhu",
    description: "eyhet",
    status: "Active",
    createdDate: "2023-06-14T07:35:34.77",
    details: {
      startDate: "2023-06-14T07:35:34.77",
      endDate: "2023-06-14T07:35:34.77",
    },
  },
  {
    id: "86035212-60ff-4eaa-858d-212e9524216a",
    tenantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "wwwwwww",
    description: "Something",
    status: "Active",
    createdDate: "2023-06-14T05:46:30.883",
    details: {
      startDate: "2023-06-14T07:35:34.77",
      endDate: "2023-06-14T07:35:34.77",
    },
  },
  {
    id: "99f36e8e-f538-486f-8ae1-5d2324f9abe4",
    tenantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "Mrijil",
    description: "Meju",
    status: "Active",
    createdDate: "2023-06-14T07:45:30.483",
    details: {
      startDate: "2023-06-14T07:35:34.77",
      endDate: "2023-06-14T07:35:34.77",
    },
  },
  {
    id: "585ab0cc-9bd5-443f-80fa-c868647b0a5e",
    tenantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "Simarjot Singh",
    description: "asdasdas",
    status: "Active",
    createdDate: "2023-06-13T13:38:18.953",
    details: {
      startDate: "2023-06-14T07:35:34.77",
      endDate: "2023-06-14T07:35:34.77",
    },
  },
  {
    id: "0e1af50d-afa5-49c5-affd-cc2544b99f10",
    tenantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "5erty",
    description: "dd",
    status: "Active",
    createdDate: "2023-06-13T11:11:07.627",
    details: {
      startDate: "2023-06-14T07:35:34.77",
      endDate: "2023-06-14T07:35:34.77",
    },
  },
  {
    id: "0a0c4682-2122-4499-bef8-cfa529c0b192",
    tenantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "fyukiryu",
    description: "ryuir6y",
    status: "Active",
    createdDate: "2023-06-12T08:23:46.913",
    details: {
      startDate: "2023-06-14T07:35:34.77",
      endDate: "2023-06-14T07:35:34.77",
    },
  },
  {
    id: "ffef98c4-a7e4-4b64-81fb-dec10671257c",
    tenantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "wwwwwww",
    description: "Something",
    status: "Active",
    createdDate: "2023-06-12T07:37:04.697",
    details: {
      startDate: "2023-06-14T07:35:34.77",
      endDate: "2023-06-14T07:35:34.77",
    },
  },
  {
    id: "ef7e9048-e954-4a9b-8b2a-e03c84a24f8f",
    tenantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "wertyuewry",
    description: "eryhuery",
    status: "Active",
    createdDate: "2023-06-14T05:29:50.23",
    details: {
      startDate: "2023-06-14T07:35:34.77",
      endDate: "2023-06-14T07:35:34.77",
    },
  },
  {
    id: "71d5c24e-fb25-4814-a904-e30abb1a4f83",
    tenantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "sss",
    description: "dd",
    status: "Active",
    createdDate: "2023-06-13T11:08:21.06",
    details: {
      startDate: "2023-06-14T07:35:34.77",
      endDate: "2023-06-14T07:35:34.77",
    },
  },
  {
    id: "78ecdfbe-da78-4da6-ab47-e33c8f41c60d",
    tenantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "udei",
    description: "reior748",
    status: "Active",
    createdDate: "2023-06-12T09:37:11.31",
    details: {
      startDate: "2023-06-14T07:35:34.77",
      endDate: "2023-06-14T07:35:34.77",
    },
  },
  {
    id: "0045806a-61b1-4748-8857-e3afb743aa4d",
    tenantId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "wyw",
    description: "tywrty",
    status: "Active",
    createdDate: "2023-06-14T06:23:56.947",
    details: {
      startDate: "2023-06-14T07:35:34.77",
      endDate: "2023-06-14T07:35:34.77",
    },
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <Heading />
      <Table data={data} />
    </div>
  );
}

export default App;
