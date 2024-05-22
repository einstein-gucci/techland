package ch.zhaw.techland.model.voucher;

import java.util.List;
import ch.zhaw.techland.model.Device;

public class FiveBucksVoucher implements Voucher {

    @Override
    public double getDiscount(List<Device> devices) {
        var sum = devices.stream().mapToDouble(p -> p.getMietpreis()).sum();
        if (sum >= 10) {
            return 5;
        }
        return 0;
    }

}
