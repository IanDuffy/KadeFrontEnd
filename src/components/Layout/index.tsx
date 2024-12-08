import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Define the MenuItem type
type MenuItem = {
  name: string;
  href: string;
  subItems?: {
    name: string;
    href: string;
  }[];
};

async function fetchNavbarData(): Promise<MenuItem[]> {
  const apiUrl = `${process.env.PAYLOAD_URL}/api/navigation/1?locale=undefined&draft=false&depth=4`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch navbar data: ${response.statusText}`);
  }

  const data = await response.json();
  if (data.docs && data.docs.length > 0) {
    const firstDoc = data.docs[0];
    return firstDoc.subheadings.map((subheading: any) => ({
      name: subheading.subheading,
      href: subheading.links,
      subItems: subheading.subItems?.map((subItem: any) => ({
        name: subItem.name,
        href: subItem.href,
      })),
    }));
  } else {
    console.error("No documents found in the response data");
    return [];
  }
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const menuItems = await fetchNavbarData();
  console.log(menuItems, "menu items");
  return (
    <>
      <Navbar menuItems={menuItems} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
