package ch.zhaw.techland.model.voucher;

import java.util.List;

import ch.zhaw.techland.model.Device;
import ch.zhaw.techland.model.DeviceType;

public class TwoForOneVoucher implements Voucher {

    DeviceType deviceType;

    public TwoForOneVoucher(DeviceType deviceType) {
        this.deviceType = deviceType;
    }

    @Override
    public double getDiscount(List<Device> devices) {
        var filteredDevices = devices.stream().filter(p -> this.deviceType.equals(p.getDeviceType())).toList();
        var sum = filteredDevices.stream().mapToDouble(p -> p.getMietpreis()).sum();
        if (filteredDevices.size() <= 1) {
            return 0;
        }
        return sum / 2;
    }
}
