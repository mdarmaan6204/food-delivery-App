import { CDN_URL } from "../../utlis/constant";

const ResturantCard = (props) => {
    const { resData } = props;
    // console.log(resData);
    const { name, cuisines, avgRating, costForTwo } = resData?.info;
    const deliveryTime = resData.info.sla.deliveryTime;
    return (
      <div className="res-card m-4 p-4 bg-gray-200 w-[300px] rounded-lg hover:bg-gray-400">
        <img
          className="res-logo rounded-lg"
          alt="res-logo"
          src={ CDN_URL + resData.info.cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg  ">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };


  export const withPromtedLabel = (ResturantCard) =>{
    return (props) =>{
      return (
        <div>
      <label className= "bg-black m-4 p-4 absolute text-white rounded-lg" >PROMOTED</label>
        <ResturantCard {...props} />
        </div>
      )
    }
  }

  export default ResturantCard;