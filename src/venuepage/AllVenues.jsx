import { GoLinkExternal } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import useFetch from "../fetch/useFetch";

const GetData = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    "https://sis.materdeicollege.com/api/venues"
  );

  const goSingleVenue = (venue) => {
    navigate(`/venues/${venue}`);
  };

  return (
    <>
      <h1 className="text-center bg-primary text-white">
        Reactjs Midterm Project
      </h1>
      {error && (
        <p className="text-danger text-center">Something wrong from the API</p>
      )}
      {loading && (
        <div className="text-center bg-success text-white">
          Loading Venues...
        </div>
      )}
      <table className="table table-striped table-bordered text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Building</th>
            <th scope="col">Capacity</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data)?.map((venue, index) => {
            return (
              <tr key={index} className="hover-effect">
                <td>{data[venue].id}</td>
                <td>{data[venue].name}</td>
                <td>{data[venue].building}</td>
                <td>{data[venue].capacity}</td>
                <td>
                    <div className="btn btn-info" onClick={() => {
                      goSingleVenue(data[venue].id);
                    }}>View</div>
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default GetData;