interface CountCardProps {
  count: number;
  setCount: (value: number | ((prev: number) => number)) => void;
}

function CountCard({ count, setCount }: CountCardProps) {
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default CountCard;