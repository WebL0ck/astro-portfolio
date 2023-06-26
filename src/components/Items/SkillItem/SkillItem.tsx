import Box from "@components/shared/Box/Box";
import Typography from "@components/shared/Typography/Typography";
import Image from "@components/shared/Image/Image";

interface Props {
  title?: string;
  description?: string;
  src?: string;
  href?: string;
}

function SkillItem({ title = "Title", description = "Description", src, href }: Props) {
  const handleOpenLink = () => {
    if (!href) return null;

    window.open(href);
  };

  return (
    <Box
      className="flex gap-2 w-[300px] cursor-pointer hover:bg-blurry-3 hover:backdrop-blur-lg border-transparent border border-solid rounded p-2"
      onClick={handleOpenLink}
    >
      <Box className="rounded min-w-[68px] min-h-[68px] flex items-center justify-center">
        <Image src={src} alt={title} width={42} height={42} />
      </Box>
      <Box className="flex flex-col justify-start">
        <Typography className="font-medium text-lg">{title}</Typography>
        <Typography className="text-gray-2 text-sm line-clamp-2" title={description}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default SkillItem;
