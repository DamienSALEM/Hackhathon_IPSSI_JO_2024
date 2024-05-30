import { Box, Typography } from "@mui/material";
import imgError from "../assets/error404.webp"
// import imgError from '../../assets/page404.webp';
import { Container, Grid } from "@mui/material";

const Error404 = () => {
	return (
		<Box
			sx={{
				height: "100vh",
				width: "100vw",
				backgroundImage: `url(${imgError})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				// background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${imgError})`,
				// backgroundRepeat: "no-repeat",
				// backgroundPosition: "center",
				// backgroundSize: "cover",
			}}
		></Box>
	)
}
export default Error404;
