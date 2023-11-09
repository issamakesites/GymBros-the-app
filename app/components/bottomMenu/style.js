import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    menu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: "#eee",
        alignItems: "center",
    },
    menuItem: {
        flex: 1,
        alignContent: "center",
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    menuLink: {
        height: 50,
        opacity: 0.1
    },
    menuLinkActive: {
        height: 50,
        opacity: 1
    },
    menuIcon: {
        flex: 1,
        height: 32,
        width: 32,
        opacity: 0.1
    },
})