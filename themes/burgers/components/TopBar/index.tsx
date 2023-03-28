import Image from "next/image";
import { Menu, MenuItem, MenuWrapper, Title } from "./styles";

type Props = {
  categories: Array<any>;
};

const TopBar = ({ categories }: Props) => {
  return (
    <div>
      <Title>
        <Image
          src="/burger_brand_white.png"
          width={200}
          height={180}
          alt="burger"
        />
      </Title>
      <MenuWrapper>
        <Menu>
          {categories
            .filter((category) => category.parent === 0)
            .map((category, idx) => {
              return (
                <MenuItem key={`${category}${idx}`}>{category.name}</MenuItem>
              );
            })}
        </Menu>
      </MenuWrapper>
    </div>
  );
};

export default TopBar;
