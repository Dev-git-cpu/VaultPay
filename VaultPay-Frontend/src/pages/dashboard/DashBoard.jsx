
import ActionButtons from "../../components/ActionButtons";
import BalanceCard from "../../components/BalanceCard";
import Navbar from "../../components/Navbar";
import RecentTransactions from "../../components/RecentTransactions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <BalanceCard />
        <ActionButtons />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;
