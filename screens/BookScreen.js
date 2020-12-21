import React, {useState} from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Pdf from 'react-native-pdf';

function BookScreen() {
  const [page, setPage] = useState(1);

  const nextPage = (pageNo) => {
    this.pdf.setPage(pageNo + 1);
  };
  const previousPage = (pageNo) => {
    this.pdf.setPage(pageNo - 1);
  };

  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Pdf
          ref={(pdf) => {
            this.pdf = pdf;
          }}
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
            setPage(page);
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link presse: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>
      <View style={styles.view2}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => previousPage(page)}>
            <Text style={styles.text1}> {'<'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => nextPage(page)}>
            <Text style={styles.text1}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonContainer: {
    borderColor: 'grey',
    borderWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 20,
  },
  view1: {
    flex: 1,
  },
  view2: {
    flexDirection: 'row',
    backgroundColor: 'black',
    opacity: 0.5,
    height: '10%',
    width: '100%',
  },
  text1: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default BookScreen;
