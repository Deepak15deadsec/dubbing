import { useEffect, useContext } from "react";
import Routing from "./routing";
import { useAuth } from "./hooks/getAuth";
import ReactQueryLoading, {
  optimisticOptions,
  queries,
  getRequest,
  updateRequest,
} from "./react-query";
import { useMutation, useQuery } from "react-query";
import { AppContext } from "./context/appContext";
import Loading from "./components/Loading";

function App() {
  // const { auth } = useAuth();
  
  // const appContext: any = useContext(AppContext);

  // const {data: userDetails} = useQuery(queries.loggedInUser, () => getRequest(`/users/me`));

  // //update
  // const { mutate: updateUser } = useMutation(
  //   updateRequest,
  //   optimisticOptions(queries.loggedInUser)
  // );

  // useEffect(() => {

  //   //set user
  //   appContext?.setUser(userDetails)

  //   let navigatorId = userDetails?.locationAccess && navigator.geolocation.getCurrentPosition(function (position) {
  //     updateUser({
  //       endPoint: `/users/${userDetails.id}`,
  //       payload: {
  //         location: {
  //           langitude: position?.coords?.longitude,
  //           latitude: position?.coords?.latitude
  //         }
  //       }
  //     })
  //   });

  //   return () => {
  //     navigator.geolocation.clearWatch(navigatorId)
  //   }

  // }, [userDetails]);

  return (
    <>
     <Routing />
      {/* {auth && userDetails ? (
        <div className="flex w-[100vw] h-[100vh] bg-[#F3F3F3]">
          <ReactQueryLoading />

          <div className="h-full">
            <Sidebar />
          </div>

          <div className="w-full h-full">
            <div className="h-[calc(100vh)] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <Routing />
            </div>
          </div>

          <Footer />
        </div>
      ) : (
        <Loading />
      )} */}
    </>
  );
}

export default App;
