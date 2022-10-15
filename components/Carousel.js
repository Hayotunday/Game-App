import { View, FlatList } from "react-native";
import React from "react";

export default Carousel = ({ data, renderItem }) => {
	return (
		<View>
			<FlatList
				horizontal={true}
				data={data}
				renderItem={renderItem}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};
