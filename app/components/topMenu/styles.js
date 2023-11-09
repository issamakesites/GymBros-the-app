import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    greetings: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 18,
        color: 'black'
    },
    greetingsImage: {
        height: 20,
        width: 20,
        marginLeft: 10
    },
    topMenuLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    topMenuRow: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        width: '95%',
        marginHorizontal: '2.5%',
        backgroundColor: "#fff",
        borderRadius: 18,
        alignItems: 'center',
        paddingHorizontal: 22,
        paddingVertical: 8,
    },
    pdpWrapper: {
        flex: .2,
    },
    pdp: {
        height: 52,
        width: 52,
        borderRadius: 100
    },
})