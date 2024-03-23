import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../Card/Card";
import { CardContent } from "../CardContent";
import { CardImage } from "../CardImage";
import { WishListButton } from "../../Folder/components/WishListButton";
import { formatData } from "util/formatDate";
import { getElapsedTime } from "util/getElapsedTime";
import { CardInfoDataForm } from "interface/DataForm";

export const CardItem = ({
  url,
  image_source,
  description,
  created_at,
  data,
}: CardInfoDataForm) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const currentLocation = location.pathname;

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <CardImage imageSource={image_source} isZoomedIn={isHovered} />
          {currentLocation === "/folder" && <WishListButton />}
          <CardContent
            elapsedTime={getElapsedTime(created_at)}
            description={description}
            createdAt={formatData(created_at)}
            isHovered={isHovered}
            currentLocation={currentLocation}
            selectURL={url}
            data={data}
          />
        </Card>
      </a>
    </>
  );
};
