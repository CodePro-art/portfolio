const TabsMenu = ({ tabs, activeTab, setActiveTab }) => {
    document.addEventListener('DOMContentLoaded', function() {
        // Select all navigation tab items
        const tabItems = document.querySelectorAll('.navigation-tab-item');
        const overlay = document.querySelector('.navigation-tab-overlay');
    
        // Function to remove active class from all items and add it to the clicked one
        tabItems.forEach((tabItem, index) => {
            tabItem.addEventListener('click', function() {
                // Remove 'active' class from all items
                tabItems.forEach(item => item.classList.remove('active'));
    
                // Add 'active' class to the clicked item
                tabItem.classList.add('active');
    
                // Calculate the left position for the overlay
                const leftPosition = index * 130 + 'px';
                overlay.style.left = leftPosition;
            });
        });
    });
    
    return(
        <nav className="navigation-tab">
            <div className="navigation-tab-item active">
                <span className="navigation-tab__icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-list"
                    >
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3" y2="6"></line>
                        <line x1="3" y1="12" x2="3" y2="12"></line>
                        <line x1="3" y1="18" x2="3" y2="18"></line>
                    </svg>
                    </span>
                <span className="navigation-tab__txt">List</span>
            </div>
            <div className="navigation-tab-item">
                <span className="navigation-tab__icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-tag"
                    >
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                        <line x1="7" y1="7" x2="7" y2="7"></line>
                    </svg>
                    </span>
                <span className="navigation-tab__txt">Tags</span>
            </div>
            <div className="navigation-tab-item">
                <span className="navigation-tab__icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-shopping-bag"
                    >
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    </span>
                <span className="navigation-tab__txt">Bag</span>
            </div>
            <div className="navigation-tab-item">
                <span className="navigation-tab__icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bell"
                    >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    </span>
                <span className="navigation-tab__txt">Notifications</span>
            </div>
            <div className="navigation-tab-overlay"></div>
        </nav>
    );
};

export default TabsMenu;