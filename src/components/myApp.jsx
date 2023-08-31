import { FormProvider } from "../context/context.jsx";
import "../css/index.css";

import ContainerTask from "./containerTask/containerTask";
import EditTaskContainer from "./edit/edit.jsx";
import Footer from "./footer/footer";
import FormTask from "./form/form";

function MyApp() {
  return (
    <>
      <FormProvider>
        <div className="container">
          <FormTask />
          <ContainerTask />
          <Footer />
        </div>
        <EditTaskContainer />
      </FormProvider>
    </>
  );
}

export default MyApp;
