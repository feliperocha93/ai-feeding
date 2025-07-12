export const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  };

export const formatPurchases = (purchases) => {
    return purchases.map((purchase) => {
        return `Product: ${purchase.product} - Price: ${purchase.price} - Date: ${purchase.date} - Status: ${purchase.status}`;
    }).join("\n");
};
