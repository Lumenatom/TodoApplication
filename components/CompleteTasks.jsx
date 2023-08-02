import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {COLOR} from "./utils/CONSTANTS";
import CheckboxIcon from "../assets/Checked.png"

const CompleteTasks = ({el, clickToTask}) => {
    return (
        <View style={styles.wrapperIncomplete} onStartShouldSetResponder={() => clickToTask(el)}>
            <Image style={styles.checkboxImage} source={CheckboxIcon}/>
            <Text style={styles.titleIncomplete}>{el.title}</Text>
        </View>
    );
};

export default CompleteTasks;


const styles = StyleSheet.create({
    wrapperIncomplete: {
        backgroundColor: COLOR.white,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        paddingVertical: 8,

    },
    titleIncomplete: {
        color: COLOR.darkGrey,
        fontSize: 18,
        fontFamily: 'MontserratMedium',
        textDecorationLine: 'line-through',
    },
    checkboxImage: {
        width: 24,
        height: 24,

    },

});
