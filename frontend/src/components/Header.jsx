import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import SearchBox from "./SearchBox";

const Header = () => {
	const { cartItems } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.auth);
	const [logoutApiCall] = useLogoutMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			navigate("/login");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand href="/">Shop Brand</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<SearchBox/>
							<LinkContainer to="/cart">
								<Nav.Link>
									<FaShoppingCart />
									Cart
									{cartItems.length > 0 && (
										<Badge pill bg="success" style={{ marginLeft: "5px" }}>
											{cartItems.reduce((acc, curr) => acc + curr.qty, 0)}
										</Badge>
									)}
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown title={userInfo.name} id="username">
									<LinkContainer to="/profile">
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to="/login">
									<Nav.Link href="/login">
										<FaUser /> Sign In
									</Nav.Link>
								</LinkContainer>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title='Admin' id='adminmenu'>
									<LinkContainer to='/admin/orderList'>
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/productList'>
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/userList'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
