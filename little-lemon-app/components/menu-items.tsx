import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

interface MenuItem {
    name: string;
    price: string;
    id: string;
}

interface Section {
    title: string;
    data: MenuItem[];
}

const menuItemsToDisplay: Section[] = [
    {
        title: 'Starters',
        data: [
            { name: 'Hummus', price: '$5.00', id: '1A' },
        ],
    },
    {
        title: 'Main Courses',
        data: [
            { name: 'Moutabal', price: '$5.00', id: '2B' },
            { name: 'Falafel', price: '$7.50', id: '3C' },
            { name: 'Marinated Olives', price: '$5.00', id: '4D' },
            { name: 'Kofta', price: '$5.00', id: '5E' },
            { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
            { name: 'Lentil Burger', price: '$10.00', id: '7G' },
            { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
            { name: 'Kofta Burger', price: '$11.00', id: '9I' },
            { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00', id: '12L' },
            { name: 'Bread Sticks', price: '$3.00', id: '13M' },
            { name: 'Pita Pocket', price: '$3.00', id: '14N' },
            { name: 'Lentil Soup', price: '$3.75', id: '15O' },
            { name: 'Greek Salad', price: '$6.00', id: '16Q' },
            { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00', id: '18S' },
            { name: 'Tartufo', price: '$3.00', id: '19T' },
            { name: 'Tiramisu', price: '$5.00', id: '20U' },
            { name: 'Panna Cotta', price: '$5.00', id: '21V' },
        ],
    },
];

const Footer = () => <Text style={menuStyles.footerText}>All rights reserved © 2025 Little Lemon</Text>;

const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;

const Separator = () => <View style={menuStyles.separator} />;

const Item = ({ name, price }: { name: string, price: string }) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.itemText}>{name}</Text>
        <Text style={menuStyles.itemText}>{price}</Text>
    </View>
);
/*             <FlatList
                data={menuItemsToDisplay}
                keyExtractor={(item) => item.data.id}
                renderItem={renderItem}
                ItemSeparatorComponent={Separator}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
            />
            
            */

const MenuItems = () => {
    const renderItem = ({ item }: { item: MenuItem }) => <Item name={item.name} price={item.price} />;

    const renderSectionHeader = ({ section: { title } }: { section: Section }) => (
        <View style={menuStyles.sectionHeaderContainer}>
            <Text style={menuStyles.sectionHeaderText}>{title}</Text>
        </View>
    );

    return (
        <View style={menuStyles.container}>
            <SectionList
                sections={menuItemsToDisplay}
                keyExtractor={(item, index) => item.id + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={Separator}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
            />
        </View>
    );
};

const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#333333',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        marginVertical: 20,
    },
    sectionHeaderContainer: {
        backgroundColor: '#F4CE14',
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    sectionHeaderText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 20,
    },
    footerText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#666666',
        marginHorizontal: 40,
    },
});

export default MenuItems;

