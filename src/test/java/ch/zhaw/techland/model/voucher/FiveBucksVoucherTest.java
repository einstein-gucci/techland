package ch.zhaw.techland.model.voucher;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;

import ch.zhaw.techland.model.Device;
import ch.zhaw.techland.model.DeviceType;

public class FiveBucksVoucherTest {

    @Test
    public void testEmpty() {
        var voucher = new FiveBucksVoucher();
        assertEquals(0, voucher.getDiscount(new ArrayList<Device>()), 0.01);
    }

    @Test
    public void testTwo() {
        var devices = new ArrayList<Device>();
        var voucher = new FiveBucksVoucher();
        devices.add(new Device("desc", "desc", DeviceType.COMPUTER, 2.0));
        assertEquals(0, voucher.getDiscount(devices), 0.01);
    }

    @Test
    public void testTen() {
        var voucher = new FiveBucksVoucher();
        var devices = new ArrayList<Device>();
        devices.add(new Device("description", "description", DeviceType.COMPUTER, 10.0));
        assertEquals(5, voucher.getDiscount(devices), 0.01);
    }

}
