import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    genderChoice: {
        alignContent: 'center',
        alignItems: 'center',
        padding: 12,
        flex: .492,
        backgroundColor: '#fff',
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 8,
        paddingTop: 16
    },
    genderImage: {
        height: 38,
        width: 38,
        tintColor: 'black'
    },
    genderText: {
        marginTop: 6,
        fontFamily: 'Montserrat_400Regular'
    },
    genderChoiceSelected: {
        alignContent: 'center',
        alignItems: 'center',
        padding: 12,
        flex: .492,
        backgroundColor: '#fff',
        borderColor: '#3CB87C',
        borderWidth: 1,
        borderRadius: 8,
        paddingTop: 16
    },
    /* genderImageSelected: {
         height: 48,
         width: 48,
         tintColor: 'white'
     },
     genderTextSelected: {
         marginTop: 26,
         fontFamily: 'Montserrat_400Regular',
         color: '#fff'
     },*/
    lineChoice: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#eee",
        borderWidth: 1,
        borderRadius: 12,
        alignContent: "center",
        //alignItems: "center",
        paddingHorizontal: 18,
        paddingVertical: 26,
        marginBottom: 30,
        flex: 1
    },
    lineChoiceText: {
        flex: .95
    },
    lineChoiceSelected: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 12,
        alignContent: "center",
        //alignItems: "center",
        paddingHorizontal: 18,
        paddingVertical: 26,
        marginBottom: 30,
    },
    lineChoiceImage: {
        width: 48,
        height: 48,
    },
    lineChoiceTitle: {
        color: "#000",
        fontSize: 18,
        fontFamily: "Montserrat_600SemiBold",
    },
    lineChoiceSubtitle: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 12,
        color: "#6c757d",
        marginTop: 4,
    },
    pageWrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    logoContainer: {
        flex: 0.1, // Takes 10% of the height
        justifyContent: "center",
        alignItems: "center",
    },
    contentContainer: {
        flex: 0.9,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: 'rgba(255,255,255,.97)',
    },
    logoTop: {
        width: 60,
        resizeMode: "contain",
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: "left",
        padding: 16,
    },
    actionsWrapper: {
        flex: 0.15
    },
    pageTitle: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 30,
        marginTop: 16,
    },
    pageSubtitle: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 14,
        color: "rgb(90, 96, 102)",
        marginTop: 10,
    },
    textField: {
        width: "100%",
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 0,
        fontFamily: "Montserrat_400Regular",
        fontSize: 14,
        marginTop: 4,
        marginBottom: 28,
        backgroundColor: '#f1f5f5'
    },
    label: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 14,
        marginTop: 12,
        color: "rgb(90, 96, 102)"
    },
    button: {
        flex: 0.48,
        backgroundColor: "#272b2e",
        paddingVertical: 18,
        borderRadius: 6,
        marginTop: 0,
        top: 0,
        fontSize: 12,
        marginBottom: 0
    },
    buttonFull: {
        width: '90%',
        marginHorizontal: '5%',
        position: 'absolute',
        bottom: 10,
        backgroundColor: "#272b2e",
        paddingVertical: 18,
        borderRadius: 6,
        marginTop: 0,
        fontSize: 12,
        marginBottom: 0
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Montserrat_400Regular",
    },
    buttonSecondary: {
        flex: 0.48,
        backgroundColor: "transparent",
        paddingVertical: 16,
        borderRadius: 6,
        marginTop: 0,
        borderWidth: 1,
        borderColor: "#eee",
        top: 0,
        fontSize: 12,
        marginBottom: 0
    },
    buttonTextSecondary: {
        color: "#000",
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Montserrat_400Regular",
    },
    form: {
        top: 40,
    },
    buttonsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: 'absolute',
        bottom: 15,
        width: '90%',
        marginHorizontal: '5%'
            //flex: .8,
    },
    gendersWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 28,
        marginTop: 10
    },
})