import React, {useState, useRef} from 'react';
import {View, Dimensions, StyleSheet, Text, Linking} from 'react-native';
import { Appbar, Paragraph, Button } from 'react-native-paper';
import Pdf from 'react-native-pdf';
import Colors from '../theme/colors';

function BookScreen() {
  const [active, setActive] = React.useState('');
  const [page, setPage] = useState(1);
  const pdfRef = useRef(null);

  const loadInBrowser = (uri) => {
    Linking.openURL(uri).catch((err) =>
      console.error("Couldn't load page", err),
    );
  };

  const nextPage = (pageNo) => {
    pdfRef.current.setPage(pageNo + 1);
  };
  const previousPage = (pageNo) => {
    pdfRef.current.setPage(pageNo - 1);
  };
  const source = require('../assets/RecetasFit.pdf');
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Pdf
          ref={pdfRef}
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
            loadInBrowser(uri);
            console.log(`Link presse: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>
      <View style={{ width: '100%'}}>
        <Appbar.Header style={{ backgroundColor: Colors.themeLightColors.primary }}>
          <View style={{ flex: 1}}>
            <Button onPress={() => previousPage(page)}>
              <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center',  }}>
                <Appbar.Action icon="arrow-left" color="white"/>
                <Paragraph style={{ color: 'white'}}>Previous Page</Paragraph>
              </View>
            </Button>
          </View>
          <View style={{ flex: 1}}>
            <Button onPress={() => nextPage(page)}>
              <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <Paragraph style={{ color: 'white'}}>Next Page</Paragraph>
                <Appbar.Action icon="arrow-right" color="white"/>
              </View>
            </Button>
          </View>
        </Appbar.Header>
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
