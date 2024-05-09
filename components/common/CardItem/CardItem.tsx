import { useState } from "react";
import { useRouter } from "next/router";
import { CardInfoDataForm } from ".././../../types/DataForm";
import { Card } from "../Card";
import { CardImage } from "../CardImage";
import WishListButton from "@components/folder/WishListButton";
import { CardContent } from "../CardContent";
import { getElapsedTime } from "@util/getElapsedTime";
import { formatData } from "@util/formatDate";

export const CardItem = ({
  url,
  image_source,
  description,
  created_at,
  folderList,
}: CardInfoDataForm) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useRouter();
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
            folderList={folderList}
          />
        </Card>
      </a>
    </>
  );
};
