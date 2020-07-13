import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { globalStyles } from "../styles/global-styles";
import { Formik } from "formik";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import * as yup from "yup";
import { Button } from "react-native-elements";

const ReviewSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(4)
    .max(20),
  body: yup
    .string()
    .required()
    .min(8)
    .max(100),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a no  1-5", val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
});

const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.containerForm}>
      <Formik
        initialValues={{
          title: "",
          body: "",
          rating: ""
        }}
        validationSchema={ReviewSchema}
        onSubmit={(values, action) => {
          addReview(values);
          action.resetForm();
          console.log(values);
        }}
      >
        {formicProps => (
          <View style={styles.form}>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              placeholderTextColor="rgba(115, 108, 108, 0.89)"
              onChangeText={formicProps.handleChange("title")}
              value={formicProps.values.title}
              onBlur={formicProps.handleBlur("title")}
            />
            <Text style={globalStyles.error}>
              {formicProps.touched.title && formicProps.errors.title}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              placeholderTextColor="rgba(115, 108, 108, 0.89)"
              onChangeText={formicProps.handleChange("body")}
              value={formicProps.values.body}
              onBlur={formicProps.handleBlur("body")}
            />
            <Text style={globalStyles.error}>
              {formicProps.touched.body && formicProps.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating"
              placeholderTextColor="rgba(115, 108, 108, 0.89)"
              onChangeText={formicProps.handleChange("rating")}
              value={formicProps.values.rating}
              keyboardType="numeric"
              onBlur={formicProps.handleBlur("rating")}
            />
            <Text style={globalStyles.error}>
              {formicProps.touched.rating && formicProps.errors.rating}
            </Text>
            <View style={styles.bottonSubmit}>
              <Button
                title="submit"
                color="rgba(55, 51, 51, 0.89)"
                onPress={formicProps.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  bottonSubmit: {
    width: wp("60%"),
    marginLeft: 40
  },
  form: {
    color: "black"
  }
});

export default ReviewForm;
