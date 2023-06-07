import AddTD from "./AddTD";
import TDList from "./TDList";
import TDwrapper from "./TDwrapper";


const TDContainer = () => {
    return (
        <>
            <TDwrapper>
                <AddTD />
                <TDList />
            </TDwrapper>
        </>
      );
}

export default TDContainer;