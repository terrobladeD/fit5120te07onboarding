export function Home() {
    return (
        <div className="container">
        <h1>Welcome to our Sustainability and Waste Separation Education Page!</h1>
        <p>We all want to live in a clean and healthy environment, but sometimes we forget that we need to take action to make it happen. One of the easiest and most effective ways to do this is by practicing sustainability and proper waste separation. Here are some important facts and rules you need to know:</p>
  
        <h2>What is sustainability?</h2>
        <p>Sustainability is the practice of using resources in a way that does not deplete them, so they can be used by future generations. It involves reducing our environmental impact and promoting social and economic well-being.</p>
  
        <h2>Why is sustainability important?</h2>
        <p>Sustainability is important because it ensures that we can continue to enjoy a high quality of life without degrading the environment or compromising the ability of future generations to meet their needs.</p>
  
        <h2>What is waste separation?</h2>
        <p>Waste separation is the process of separating different types of waste into separate containers, so they can be recycled or disposed of properly. This helps to reduce the amount of waste that goes into landfills and helps to conserve natural resources.</p>
  
        <h2>Rules of waste separation:</h2>
        <ol>
          <li>Separate recyclable materials, such as paper, cardboard, plastic, and glass, from non-recyclable materials, such as food waste and other organic materials.</li>
          <li>Rinse recyclable materials before placing them in the recycling bin to prevent contamination.</li>
          <li>Place all non-recyclable waste in a separate bin or bag.</li>
          <li>Do not mix hazardous waste, such as batteries, electronics, or chemicals, with regular waste.</li>
          <li>Follow your local waste management guidelines for the disposal of hazardous waste.</li>
        </ol>
  
        <p>By following these rules of waste separation, you can help to conserve natural resources, reduce landfill waste, and promote sustainability in your community.</p>
  
        <p>Thank you for taking the time to learn about sustainability and waste separation. Let's work together to create a cleaner, healthier environment for all!</p>
  
        <style>{`
          .container {
            font-family: Arial, sans-serif;
            background-color: #F7F7F7;
            padding: 20px;
          }
  
          h1 {
            font-size: 36px;
            text-align: center;
            margin-top: 50px;
            margin-bottom: 30px;
            color: #2E2E2E;
          }
  
          h2 {
            font-size: 24px;
            color: #2E2E2E;
            margin-top: 40px;
            margin-bottom: 20px;
          }
  
          p {
            font-size: 18px;
            color: #4F4F4F;
            line-height: 1.5;
            margin-bottom: 20px;
          }
  
          ol {
            list-style-type: decimal;
            margin-left: 50px;
          }
  
          li {
            font-size: 18px;
            color: #4F4F4F;
            line-height: 1.5;
            margin-bottom: 10px;
          }
        `}
        </style>
      </div>
    )
}
