import React from "react";
import { useParams } from "react-router";
import { Row, Col } from "react-bootstrap";
import { Loader } from "../components/Loader";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { Message } from "../components/Message";
import Paginate from "../components/Paginate";

const HomeScreen = () => {
	const { pageNumber } = useParams();
	const { data, isLoading, error } = useGetProductsQuery({ pageNumber });

	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">
					{error?.data?.message || error?.error}
				</Message>
			) : (
				<>
					<h1>Latest Products</h1>
					<Row>
						{data.products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate pages={data.pages} page={data.page}/>
				</>
			)}
		</>
	);
};

export default HomeScreen;
