import { Link } from "expo-router";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
type Stock = {
  name: string;
  symbol: string;
  sector: string;
  market_cap: string;
  pe_ratio: number;
  roe: number;
};
const stocks: Stock[] = [
  {
    name: "Reliance Industries Limited",
    symbol: "RELIANCE",
    sector: "Energy, Petrochemicals, Textiles, Retail",
    market_cap: "₹15.35 trillion",
    pe_ratio: 29.5,
    roe: 8.7,
  },
  {
    name: "Infosys Limited",
    symbol: "INFY",
    sector: "Information Technology",
    market_cap: "₹5.91 trillion",
    pe_ratio: 27.3,
    roe: 26.5,
  },
  {
    name: "Tata Consultancy Services Limited",
    symbol: "TCS",
    sector: "Information Technology",
    market_cap: "₹11.58 trillion",
    pe_ratio: 35.0,
    roe: 39.6,
  },
  {
    name: "HDFC Bank Limited",
    symbol: "HDFCBANK",
    sector: "Banking",
    market_cap: "₹8.82 trillion",
    pe_ratio: 20.4,
    roe: 16.5,
  },
  {
    name: "Hindustan Unilever Limited",
    symbol: "HINDUNILVR",
    sector: "Consumer Goods",
    market_cap: "₹5.62 trillion",
    pe_ratio: 72.9,
    roe: 19.5,
  },
  {
    name: "ICICI Bank Limited",
    symbol: "ICICIBANK",
    sector: "Banking",
    market_cap: "₹5.11 trillion",
    pe_ratio: 21.3,
    roe: 15.8,
  },
  {
    name: "Bharti Airtel Limited",
    symbol: "BHARTIARTL",
    sector: "Telecommunications",
    market_cap: "₹3.38 trillion",
    pe_ratio: 59.0,
    roe: 6.8,
  },
  {
    name: "Kotak Mahindra Bank Limited",
    symbol: "KOTAKBANK",
    sector: "Banking",
    market_cap: "₹3.84 trillion",
    pe_ratio: 30.7,
    roe: 13.6,
  },
  {
    name: "State Bank of India",
    symbol: "SBIN",
    sector: "Banking",
    market_cap: "₹3.72 trillion",
    pe_ratio: 13.8,
    roe: 11.5,
  },
  {
    name: "Bajaj Finance Limited",
    symbol: "BAJFINANCE",
    sector: "Financial Services",
    market_cap: "₹3.46 trillion",
    pe_ratio: 50.2,
    roe: 13.1,
  },
];
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bodyText}>HomeScreen</Text>
      <ScrollView>
        {stocks.map((item) => (
          <StockCard item={item} key={item.name} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

function StockCard({ item }: { item: Stock }) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>
        {item.symbol}: {item.name}
      </Text>
      <Text style={styles.bodyText}>{item.sector}</Text>
      <Text style={styles.bodyText}>{item.market_cap}</Text>
      <Text style={styles.bodyText}>{item.pe_ratio}</Text>
      <Text style={styles.bodyText}>{item.roe}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Card clicked ...");
          router.push("/stock_details");
        }}
      >
        <Text>View Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: "#f9d2ff",
    borderRadius: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyText: {
    fontSize: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
  },
  button: {
    backgroundColor: "purple",
    width: 220,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
});
